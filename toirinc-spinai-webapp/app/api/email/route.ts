import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.json()

  const { name, email, num, comments } = data

  // TODO: Add your email sending logic here, e.g. using Nodemailer

  console.log('Email submission:', { name, email, num, comments })

  return NextResponse.json({ message: 'Email received' }, { status: 200 })
}
