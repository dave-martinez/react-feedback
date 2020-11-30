import auth from 'firebase/auth';
import { Heading, Code, Button, Text } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <main>
        <Heading>Welcome to React Feedback!</Heading>
        <Text>
          Get started by editing <Code>pages/index.js</Code>
        </Text>

        {auth.user ? (
          <>
            <p>{auth?.user?.displayName}</p>
            <p>{auth?.user?.email}</p>
            <Button onClick={() => auth.signOut()}>Sign out</Button>
          </>
        ) : (
          <Button onClick={() => auth.signInWithGithub()}>Sign in</Button>
        )}
      </main>
    </div>
  );
};

export default Home;
