import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwtToken from 'jsonwebtoken';

//Registration

export const register = async(req, res) => {
  try{
    const {email, password} = req.body;

    const isUsed = await User.findOne({email});

    if(isUsed) {
      res.status(409).json({message: 'This email is already registered'});
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = new User({email, password: hash});

    await user.save();

    res.status(201).json({message: 'User successfully registered'});

  } catch(err) {
    console.log(err);
  }
};

//Login

export const login = async (req, res) => {
  try{
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(!user) {
      return res.json({
        message: 'This email is not registered!'
      })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if(!isPasswordCorrect) {
      return res.json({
        message: 'Password is not correct!'
      })
    }

    const token = jwtToken.sign({
      id: user._id
      }, 
      process.env.JWT_SECRET,
      {expiresIn: '30d'},
    )

    res.json({
      token, user, message: 'You are logged in.'
    })

  } catch (error) {
    console.log(error);
  }
}

export const getMe = async (req, res) => {
  try{

  } catch (error) {
    console.log(error);
  }
}