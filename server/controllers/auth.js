import User from '../models/User.js';

//Registration

export const register = async(req, res) => {
  try{
    const {email, password} = req.body;

    const isUsed = await User.findOne({email});

    if(isUsed) {
      res.status(409).json({message: 'This email is already registered'});
    }

    const user = new User({email, password});

    await user.save();

    res.status(201).json({message: 'User successfully registerd'});

  } catch(err) {
    console.log(err);
  }
};


//Login

export const login = async (req, res) => {
  try{

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