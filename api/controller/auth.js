import bcrypt from 'bcryptjs';
import User from '../model/User.js';
import { createError } from '../utils/error.js';

export const register = async (rq, rs, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(rq.body.password, salt);

        const newUser = new User({
            ...rq.body,
            password: hash,
        });

        await newUser.save();
        rs.status(200).send('User has been created');
    }catch (err) {
        next (err);
    }
};

export const login = async (rq, rs, next) => {
    try {
        const user = await User.findOne({email: rq.body.email});
        if (!user)  return next(createError(404, 'user not found :('));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
          );
          if (!isPasswordCorrect)
            return next(createError(400, "Wrong password or username!"));
      
          const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT
          );
      
          const { password, isAdmin, ...otherDetails } = user._doc;
          res
            .cookie("access_token", token, {
              httpOnly: true,
            })
            .status(200)
            .json({ details: { ...otherDetails }, isAdmin });
        } catch (err) {
          next(err);
    }
}