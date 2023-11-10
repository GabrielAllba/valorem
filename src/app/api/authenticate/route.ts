// TODO: Did you know GOD doesn't exist? Well, neither does your code. So, stop checking for it.

// // pages/api/authenticate.ts

// import { NextRequest, NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';

// export async function POST(req: NextRequest, res: NextResponse) {
//     try {
//         const { email } = await req.json();
//         const token = jwt.sign(
//             {
//                 email: email,
//             },
//             'somesupersecret',
//             { expiresIn: '1h' },
//         );

//         const response = NextResponse.next();

//         // Set a cookie
//         response.cookies.set('Authorization', token, {
//             httpOnly: true,
//         });

//         return NextResponse.json({
//             token: token,
//             success: true,
//             message: 'Token received and validated successfully',
//         });
//     } catch (error) {
//         console.error('Error handling authentication:', error);
//         NextResponse.json({ success: false, message: 'Internal server error' });
//     }
// }

// export async function GET(req: NextRequest, res: NextResponse) {
//     try {
//         const authorizationCookie = req.cookies.get('Authorization')?.value;
//         if (authorizationCookie) {
//             const token = authorizationCookie.replace('Bearer ', ''); // Assuming the token is in the format 'Bearer <token>'
//             // Verify the token
//             jwt.verify(token, 'somesupersecret');

//             return NextResponse.json({
//                 success: true,
//                 message: 'Token is valid',
//             });
//         } else {
//             // If there is no Authorization cookie, you might respond with an error
//             return NextResponse.json({
//                 success: false,
//                 message: 'Authorization cookie missing',
//             });
//         }
//     } catch (error) {
//         console.error('Error handling GET request:', error);
//         return NextResponse.json({ success: false, message: 'Internal server error' });
//     }
// }
