
import PuppyContent from '@/components/PuppyContent'
import { Header, Icon, Grid } from 'semantic-ui-react'


export default function Home() {
  return (
    <main className="home-main">
      <Header className="home-header" as='h1' icon textAlign='center' color='brown'>
        <Icon name='paw' circular />
        <Header.Content>Welcome to Puppy World</Header.Content>
      </Header>
      <div className="home-body-container">
        <PuppyContent />
      </div>
    </main>
  )
}
