// Burası backend
export const dynamic = 'force-static'

export async function GET() {


    return Response.json({ msj: 'GET request to the homepage' })
}