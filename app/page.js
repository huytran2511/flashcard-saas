// app/page.js
import { AppBar, Toolbar, Typography, Button, Box, Grid } from '@mui/material'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { useState } from 'react'
import getStripe from '../lib/getStripe' // Ensure this utility function is set up for Stripe integration

export default function Home() {
  const handleSubmit = async () => {
    try {
      const checkoutSession = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: { origin: 'http://localhost:3000' }, // Ensure you adjust this for your production environment
      })
      const checkoutSessionJson = await checkoutSession.json()

      const stripe = await getStripe()
      const { error } = await stripe.redirectToCheckout({
        sessionId: checkoutSessionJson.id,
      })

      if (error) {
        console.warn(error.message)
      }
    } catch (error) {
      console.error('Error creating Stripe checkout session:', error)
    }
  }

  return (
    <div>
      {/* Header and Navigation */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Flashcard SaaS
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          The easiest way to create flashcards from your text.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }} href="/generate">
          Get Started
        </Button>
        <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
          Learn More
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Easy Flashcard Creation
            </Typography>
            <Typography>
              Turn your text into flashcards with just a few clicks. It's fast and intuitive.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Study Anytime, Anywhere
            </Typography>
            <Typography>
              Access your flashcards from any device, at any time. Your progress is synced across devices.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Customizable Flashcards
            </Typography>
            <Typography>
              Customize your flashcards with images, colors, and text to suit your learning style.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Free Plan
            </Typography>
            <Typography>
              Access to basic features and create up to 50 flashcards for free.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Pro Plan - $9.99/month
            </Typography>
            <Typography>
              Unlimited flashcards, custom themes, and priority support.
            </Typography>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Go Pro
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
