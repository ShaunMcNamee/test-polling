import React, { useState } from 'react'
import { format } from 'date-fns'
import {
  Text,
  Input,
  Heading,
  Box,
  HStack,
  Textarea,
  Button,
} from '@chakra-ui/react'
import { useQuery, gql, useMutation } from '@apollo/client'

const COMMENTS = gql`
  query CommentsQuery {
    comments(order_by: { createdAt: desc }) {
      id
      author
      comment
      createdAt
    }
  }
`

const COMMENTS_MUTATION = gql`
  mutation InsertComment($author: String!, $comment: String!) {
    insert_comments(objects: { author: $author, comment: $comment }) {
      returning {
        id
      }
    }
  }
`

function App() {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [insertComment] = useMutation(COMMENTS_MUTATION)
  const { loading, error, data } = useQuery(COMMENTS, { pollInterval: 500 })
  if (loading || error || !data.comments) {
    return null
  }
  return (
    <Box height="100vh" width="100vw" backgroundColor="brand.onyx" as="main">
      <HStack dir="row" alignItems="flex-start">
        <Box padding={8} flex="1" display="flex" flexDir="column">
          <Input
            placeholder="Name"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
          <Textarea
            placeholder="Comment"
            value={comment}
            onChange={({ target: { value } }) => setComment(value)}
          />
          <Button
            onClick={async () => {
              await insertComment({ variables: { author: name, comment } })
              setName('')
              setComment('')
            }}
          >
            Submit
          </Button>
        </Box>
        <Box
          padding={8}
          flex="1"
          display="flex"
          flexDir="column"
          overflow="scroll"
        >
          {data.comments.map(({ id, author, comment, createdAt }) => (
            <Box p={5} borderWidth="1px" key={id}>
              <Heading fontSize="2xl">{author}</Heading>
              <Text paddingBottom={4} paddingTop={4} fontSize="lg">
                {comment}
              </Text>
              <Text paddingBottom={4} fontSize="xs">
                {format(new Date(createdAt), 'MMM dd, yyyy HH:mm')}
              </Text>
            </Box>
          ))}
        </Box>
      </HStack>
    </Box>
  )
}

export default App
