import prisma from "@/lib/db";

export async function POST(request: Request) {
  const data = await request.json();

  // TODO: verify webhook from Stripe

  // TODO: fulfill the order
  await prisma.user.update({
    where: {
      email: data.data.object.customer_email
    },
    data: {
      hasAccess: true
    }
  });

  // return 200 OK
  return Response.json(null, { status: 200 });
}
