import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(props) {
  console.log(props);
  return (
    <Box >
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'ivangeier';
  const favoriteUsers = ['diego3g', 'filipedeschamps', 'marcobrunodev', 'ivangeier'];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className='profileRelationshipArea' style={{ gridArea: 'profileRelationshipArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Pessoas da Comunidade ({favoriteUsers.length})
            </h2>
            <ul>
              {favoriteUsers.map((user) => {
                return (
                  <li>
                    <a href={`/user/${user}`} key={user} >
                      <img src={`https://github.com/${user}.png`} alt="" />
                      <span>{user}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
