import Image from 'next/image'
import getStripe from '@/utils/get-stripe' // Ensure this utility function is set up for Stripe integration
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography, Button, Box, Grid } from '@mui/material'


export default function Home() {
  // const handleSubmit = async () => {
  //   try {
  //     const checkoutSession = await fetch('/api/checkout_sessions', {
  //       method: 'POST',
  //       headers: { origin: 'http://localhost:3000' }, // Ensure you adjust this for your production environment
  //     })
  //     const checkoutSessionJson = await checkoutSession.json()

  //     const stripe = await getStripe()
  //     const { error } = await stripe.redirectToCheckout({
  //       sessionId: checkoutSessionJson.id,
  //     })

  //     if (error) {
  //       console.warn(error.message)
  //     }
  //   } catch (error) {
  //     console.error('Error creating Stripe checkout session:', error)
  //   }
  // }

  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcards from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          textAlign: 'center',
          my: 4,
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to Flashcard SaaS
        </Typography>
        <Typography variant="h5" gutterBottom>
          {' '}
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2}}>
          Get Started
        </Button>
      </Box>
      <Box sx={{my: 6}}>
        <Typography variant="h4" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Easy Text Input
            </Typography>
            <Typography>
              {' '}
              Simply input your text and let our software do the rest. Creating flashcards has never been easier.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Smart Flashcards
            </Typography>
            <Typography>
              {' '}
              Our AI intelligently breaks down your text into concise flashcards, perfect for studying.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Accessible Anywhere
            </Typography>
            <Typography>
              {' '}
              Access your flashcards from any device, at any time. Study on the go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Basic
              </Typography>
              <Typography variant="h6" gutterBottom>
                $5 / month
              </Typography>
              <Typography>
                {' '}
                Access to basic flashcard features and limited storage.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>
                Choose Basic
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Pro
              </Typography>
              <Typography variant="h6" gutterBottom>
                $10 / month
              </Typography>
              <Typography>
                {' '}
                Unlimited flashcards and storage, with priority support.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>
                Choose Pro
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>





    // <div>
    //   {/* Header and Navigation */}
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Typography variant="h6" style={{ flexGrow: 1 }}>
    //         Flashcard SaaS
    //       </Typography>
    //       <SignedOut>
    //         <Button color="inherit" href="/sign-in">Login</Button>
    //         <Button color="inherit" href="/sign-up">Sign Up</Button>
    //       </SignedOut>
    //       <SignedIn>
    //         <UserButton />
    //       </SignedIn>
    //     </Toolbar>
    //   </AppBar>

    //   {/* Hero Section */}
    //   <Box sx={{ textAlign: 'center', my: 4 }}>
    //     <Typography variant="h2" component="h1" gutterBottom>
    //       Welcome to Flashcard SaaS
    //     </Typography>
    //     <Typography variant="h5" component="h2" gutterBottom>
    //       The easiest way to create flashcards from your text.
    //     </Typography>
    //     <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }} href="/generate">
    //       Get Started
    //     </Button>
    //     <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
    //       Learn More
    //     </Button>
    //   </Box>

    //   {/* Features Section */}
    //   <Box sx={{ my: 6 }}>
    //     <Typography variant="h4" component="h2" gutterBottom>
    //       Features
    //     </Typography>
    //     <Grid container spacing={4}>
    //       <Grid item xs={12} sm={6} md={4}>
    //         <Typography variant="h6" gutterBottom>
    //           Easy Flashcard Creation
    //         </Typography>
    //         <Typography>
    //           Turn your text into flashcards with just a few clicks. It's fast and intuitive.
    //         </Typography>
    //       </Grid>
    //       <Grid item xs={12} sm={6} md={4}>
    //         <Typography variant="h6" gutterBottom>
    //           Study Anytime, Anywhere
    //         </Typography>
    //         <Typography>
    //           Access your flashcards from any device, at any time. Your progress is synced across devices.
    //         </Typography>
    //       </Grid>
    //       <Grid item xs={12} sm={6} md={4}>
    //         <Typography variant="h6" gutterBottom>
    //           Customizable Flashcards
    //         </Typography>
    //         <Typography>
    //           Customize your flashcards with images, colors, and text to suit your learning style.
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //   </Box>

    //   {/* Pricing Section */}
    //   <Box sx={{ my: 6, textAlign: 'center' }}>
    //     <Typography variant="h4" component="h2" gutterBottom>
    //       Pricing
    //     </Typography>
    //     <Grid container spacing={4} justifyContent="center">
    //       <Grid item xs={12} sm={6} md={4}>
    //         <Typography variant="h6" gutterBottom>
    //           Free Plan
    //         </Typography>
    //         <Typography>
    //           Access to basic features and create up to 50 flashcards for free.
    //         </Typography>
    //       </Grid>
    //       <Grid item xs={12} sm={6} md={4}>
    //         <Typography variant="h6" gutterBottom>
    //           Pro Plan - $9.99/month
    //         </Typography>
    //         <Typography>
    //           Unlimited flashcards, custom themes, and priority support.
    //         </Typography>
    //         <Button variant="contained" color="primary" onClick={handleSubmit}>
    //           Go Pro
    //         </Button>
    //       </Grid>
    //     </Grid>
    //   </Box>
    // </div>
  )
}
