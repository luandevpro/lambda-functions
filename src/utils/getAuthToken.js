import jwt from "jsonwebtoken";

export default async (req) => {
   let token;
   const authorization = req.headers.authorization
   if(authorization){
      token = authorization.split(' ')[1]
      try {
         return await jwt.verify(token, "my-secret");
       } catch (e) {
         return "Your session expired. Sign in again"
       }
   }{
      return "You must be logged in"
   }
}