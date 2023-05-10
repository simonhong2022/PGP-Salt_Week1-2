
import PuppyContent from '@/components/PuppyContent'
import 'semantic-ui-css/semantic.min.css'
import { Header, Icon, Grid } from 'semantic-ui-react'


export default function Home() {
  return (
    <main>
      <Header as='h2' icon textAlign='center' color='brown'>
        <Icon name='paw' circular />
        <Header.Content>Welcome to Puppy World</Header.Content>
      </Header>
      <PuppyContent />

    </main>
  )
}
