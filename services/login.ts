import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { APIError } from '../APIError';
import { connection } from '../myDB';
const bcrypt = require('bcryptjs')

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
export async function login(data: {email: string, password: string}) {
    const {email, password} = data;
    connection.query(`SELECT * FROM \`user\` WHERE \`Email\` = '${email}' `, (err, rows, fields) => {
        if (err instanceof Error) {
          console.log(err);
          return;
        }
        const user = rows[0];

        if(user) {
            let passOK = bcrypt.compareSync(password, user.Password);
            if(passOK) {            
                const userOK = {id: user.Employee_ID, email: user.Email};
                const token = jwt.sign(userOK, JWT_SECRET);
                console.log('login token: ' + token)
                return token;
            } else {
                throw new APIError(401, 'Invalid Credential!', true);
            }
        }
        
    });
    
}