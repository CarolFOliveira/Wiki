
import {Container,ImgLogo} from './style';
import gitLogo from '../assets/logo.png';
import {Input} from '../components/input';
import {Button} from '../components/button';
import {ItemRepo} from '../components/itemRepo';
import { useState } from 'react';
import {api} from '../services/api';


function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);


  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }

    }
    alert('Repositório não encontrado')
  }

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);
    const removendo = repos.filter(repo => repo.id !== id);
    setRepos(removendo);
    
  }



  return (<>
      <Container>
        <ImgLogo src={gitLogo} alt="Logo GitHub"/>
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
        <Button onClick={handleSearchRepo}/>
        {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
       
       
      </Container>
    </>);
}

export default App;
