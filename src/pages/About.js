import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box,Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15,textAlign:"center",p:2 ,"& h3":{fontWeight:"bold",my:2,fontSize:"2rem"},"& p ":{textAlign:"justify"}}}>
        <Typography variant='h3'>Welcome To Giftsella</Typography>
        <p>
        A gift or a present is an item given to someone without the expectation of payment or anything in return. An item is not a gift if that item is already owned by the one to whom it is given. Although gift-giving might involve an expectation of reciprocity, a gift is meant to be free. In many countries, the act of mutually exchanging money, goods, etc. may sustain social relations and contribute to social cohesion. Economists have elaborated the economics of gift-giving into the notion of a gift economy. By extension the term gift can refer to any item or act of service that makes the other happier or less sad, especially as a favor, including forgiveness and kindness. Gifts are also first and foremost presented on occasions such as birthdays and holidays.
        </p>
        <br />
        <p>
        The ideology behind gifting is not just spending money on someone or to showoff; it’s a concept of lots of depth. Gifting is the way of expressing heartfelt feelings, making someone feel loved, amaze someone dear, greet someone or to make the receiver feel cared. It's a special gesture of kindness done for the special ones.Gifting is an amazing way of confessing love, affection and care. Also, people find gifting as one of the best ways of conveying their hearty feelings to their near and dear ones during special moments of life. 
        </p>
        </Box>
    </Layout>
  )
}

export default About
