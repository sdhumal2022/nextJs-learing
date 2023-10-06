 import { NextResponse } from "next/server";
 import { headerData } from "./headerData";

 export function GET() {
   const data = headerData;
   console.log(data, "test data");
   return NextResponse.json(data);
 }
