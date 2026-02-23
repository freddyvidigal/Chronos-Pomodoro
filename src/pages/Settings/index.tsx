import { useRef } from 'react';

import { SaveIcon } from 'lucide-react';

import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { MainTemplate } from '../../templates/MainTemplate';

export function Settings() {
  const {state} = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);
  

  function handleSavaSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const workTime = workTimeInput.current?.value;
    const shortBreakTime = shortBreakTimeInput.current?.value;
    const longBreakTime = longBreakTimeInput.current?.value;

    console.log(workTime, shortBreakTime, longBreakTime);
  }
  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
        </Container>
      <Container>
        <p style={{textAlign: 'center'}}>
          Modifique as configurações para tempo de foco, descanso curto e descanso longo. 
        </p>
      </Container>
      <Container>
        <form onSubmit={handleSavaSettings} action="" className='form'>
          <div className="formRow">
            <DefaultInput 
            id='workTime' 
            labelText='Foco' 
            ref={workTimeInput} 
            defaultValue={state.config.workTime}/>
          </div>
          <div className="formRow">
            <DefaultInput 
            id='shortBreakTime' 
            labelText='Descanso curto' 
            ref={shortBreakTimeInput} 
            defaultValue={state.config.shortBreakTime} />
          </div>
          <div className="formRow">
            <DefaultInput 
            id='longBreakTime' 
            labelText='Descanso longo' 
            ref={longBreakTimeInput} 
            defaultValue={state.config.longBreakTime} />
          </div>
          <div className="formRow">
            <DefaultButton
            icon={<SaveIcon />}
            aria-label='Salvar configuarções'
            title='Salvar configurações'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
