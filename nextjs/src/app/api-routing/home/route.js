import { NextResponse, } from "next/server"


// export async function GET(req){
//     return new Response('ching pong ching pong')
// }

// export function GET(res){
//     return NextResponse.json({name:'sam', age:30},{status:201})
// }

//

import {user} from '@/app/util/db'

export function GET(req){
    return NextResponse.json(user,{status:201})
}