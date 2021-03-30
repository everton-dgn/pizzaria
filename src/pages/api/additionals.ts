export default function handler(req: any, res: any) {
  res.status(200).json([
    {
      additionals: [
        {
          id: 'bacon',
          name: 'Bacon',
          price: '4.99',
          img: 'adBacon'
        },
        {
          id: 'calabreza',
          name: 'Calabreza',
          price: '4.99',
          img: 'adCalabreza'
        },
        {
          id: 'mussarela',
          name: 'Mussarela',
          price: '4.99',
          img: 'adMussarela'
        },
        {
          id: 'palmito',
          name: 'Palmito',
          price: '4.99',
          img: 'adPalmito'
        }
      ]
    }
  ])
}
