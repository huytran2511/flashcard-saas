import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useUser } from '@clerk/clerk-react'
import { collection, doc, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { Container, Grid, Card, CardActionArea, CardContent, Typography, Box } from '@mui/material'

export default function Flashcard() {
  const { isLoaded, isSignedIn, user } = useUser()
  const [flashcards, setFlashcards] = useState([])
  const [flipped, setFlipped] = useState({})

  const searchParams = useSearchParams()
  const search = searchParams.get('id')

  useEffect(() => {
    async function getFlashcard() {
      if (!search || !user) return
  
      const colRef = collection(doc(collection(db, 'users'), user.id), search)
      const docs = await getDocs(colRef)
      const flashcards = []
      docs.forEach((doc) => {
        flashcards.push({ id: doc.id, ...doc.data() })
      })
      setFlashcards(flashcards)
    }
    getFlashcard()
  }, [search, user])

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcards.map((flashcard) => (
          <Grid item xs={12} sm={6} md={4} key={flashcard.id}>
            <Card>
              <CardActionArea onClick={() => handleCardClick(flashcard.id)}>
                <CardContent>
                  <Box sx={{
                    perspective: '1000px', // Define perspective for flip effect
                    '& > div': {
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.6s',
                      transform: flipped[flashcard.id] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    },
                    '& div > div': {
                      position: 'absolute',
                      backfaceVisibility: 'hidden',
                      width: '100%',
                    },
                    '& div > div:nth-of-type(2)': {
                      transform: 'rotateY(180deg)',
                    }
                  }}>
                    <div>
                      <div>
                        <Typography variant="h5" component="div">
                          {flashcard.front} {/* Front side of the flashcard */}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="h5" component="div">
                          {flashcard.back} {/* Back side of the flashcard */}
                        </Typography>
                      </div>
                    </div>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
