
import { NextResponse } from "next/server"
import {user} from '@/app/util/db'

export function GET(req,content){

    const userData=user.filter((item)=>item.id==content.params.id)
    //console.log(userData);
    return NextResponse.json(userData,{status:200})
}