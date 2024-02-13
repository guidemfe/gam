import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react';
import React from 'react';
import EvolucaoImg from '../../assets/images/evolucao.webp';
import TeamImg from '../../assets/images/team_autonomos.webp'

const IntroducaoMicrofrontend = () => {
  return (
    <CRow className="mb-4">
      <CCol xs={12}>
        <CCard className="mb-4">

          <CCardBody>
          <h4>Micro Frontends</h4>
          <hr />
            <p>Com o tamanho e complexidade do sistema de software, é comum utilizar principalmente uma arquitetura monolítica, uma arquitetura frontend e backend ou uma arquitetura de microsserviços. Para sistemas de software grandes e complexos, a tendência atual é construir um aplicativo de navegador rico em recursos e poderoso, também conhecido como aplicativo de página única (SPA), que se baseia em uma arquitetura de microsserviços.</p>
            <p>Nesse cenário, há equipes separadas para implementações de backend para cada funcionalidade. Elas constroem seus próprios microsserviços de backend para as funcionalidades específicas, e a equipe de frontend precisa trabalhar em relação a todas as características.</p>
            <p>Com o tempo, a camada de frontend, frequentemente desenvolvida por uma equipe separada, cresce e se torna mais difícil de manter. Isso é o que chamamos de um Frontend Monolítico.</p>
            <p>A ideia por trás dos Micro Frontends é pensar em um site ou aplicativo da web como uma composição de recursos de propriedade de equipes independentes.</p>

            <img src={EvolucaoImg} alt="Evolução" className="img-fluid mb-3"  />

            <h4>Ideias Principais dos Micro Frontends</h4>

            <h5>1. Ser Tecnologicamente Neutro</h5>
            <p>Cada equipe deve poder escolher e atualizar sua pilha tecnológica sem precisar coordenar com outras equipes. Os Elementos Personalizados (Custom Elements) são uma ótima maneira de ocultar detalhes de implementação, fornecendo uma interface neutra para os outros.</p>

            <h5>2. Isolar o Código da Equipe</h5>
            <p>Não compartilhe um tempo de execução, mesmo que todas as equipes usem o mesmo framework. Construa aplicativos independentes que sejam autocontidos. Não dependa de estados compartilhados ou variáveis globais.</p>

            <h5>3. Preferir Recursos Nativos do Navegador em Vez de APIs Personalizadas</h5>
            <p>Utilize eventos do navegador para comunicação, em vez de construir um sistema global de publicação e assinatura (PubSub). Se realmente for necessário criar uma API entre equipes, tente mantê-la o mais simples possível.</p>

            <h5>4. Construir um Site Resiliente</h5>
            <p>Sua funcionalidade deve ser útil mesmo se o JavaScript falhar ou ainda não tiver sido executado. Use Renderização Universal e Aprimoramento Progressivo para melhorar o desempenho percebido.</p>


            <h4>Benefícios dos Micro Frontends</h4>

            <h5>1. Atualizações Incrementais</h5>
            <p>Para muitas organizações, isso marca o início de sua jornada com micro frontends. O antigo e grande monólito frontend está sendo segurado por uma pilha tecnológica ultrapassada ou por código escrito sob pressão de entrega, e está chegando ao ponto em que uma reescrita total é tentadora. Para evitar os perigos de uma reescrita completa, preferimos estrangular a aplicação antiga pedaço por pedaço e, ao mesmo tempo, continuar entregando novos recursos aos nossos clientes sem sermos sobrecarregados pelo monólito.</p>

            <p>Isso frequentemente leva a uma arquitetura de micro frontends. Uma vez que uma equipe tem a experiência de levar um recurso até a produção com pouca modificação no mundo antigo, outras equipes também vão querer se juntar ao novo mundo. O código existente ainda precisa ser mantido, e em alguns casos pode fazer sentido continuar adicionando novos recursos a ele, mas agora a escolha está disponível.</p>

            <p>O resultado final aqui é que temos mais liberdade para tomar decisões caso a caso em partes individuais do nosso produto e fazer atualizações incrementais em nossa arquitetura, dependências e experiência do usuário. Se houver uma grande alteração em nosso framework principal, cada micro frontend pode ser atualizado quando fizer sentido, em vez de sermos obrigados a parar tudo e atualizar tudo de uma vez. Se quisermos experimentar com nova tecnologia ou novos modos de interação, podemos fazê-lo de maneira mais isolada do que antes.</p>

            <h5>2. Codebases Simples e Desacopladas</h5>
            <p>O código-fonte de cada micro frontend individual será, por definição, muito menor do que o código-fonte de um frontend monolítico único. Essas codebases menores tendem a ser mais simples e mais fáceis para os desenvolvedores trabalharem. Em particular, evitamos a complexidade decorrente de acoplamento não intencional e inadequado entre componentes que não deveriam conhecer uns aos outros. Ao desenhar linhas mais espessas em torno dos contextos delimitados da aplicação, tornamos mais difícil que esse acoplamento acidental surja.</p>

            <h5>3. Implantação Independente</h5>
            <p>Assim como acontece com microsserviços, a implantabilidade independente de micro frontends é fundamental. Isso reduz o escopo de qualquer implantação específica, o que, por sua vez, reduz o risco associado. Independentemente de como ou onde seu código frontend é hospedado, cada micro frontend deve ter sua própria linha de entrega contínua, que o constrói, testa e implanta até a produção. Devemos ser capazes de implantar cada micro frontend com muito pouco pensamento dado ao estado atual de outras codebases ou pipelines. Não deve importar se o antigo monólito está em um ciclo de lançamento trimestral fixo e manual, ou se a equipe ao lado inseriu um recurso meio finalizado ou quebrado em seu branch principal. Se um determinado micro frontend estiver pronto para ir para a produção, ele deve ser capaz de fazê-lo, e essa decisão deve caber à equipe que o construiu e mantém.</p>

            <img src={TeamImg} alt="Times Autônomos" className="img-fluid mb-3"  />

            <h4>Equipes Autônomas</h4>

            <p>Como benefício de ordem superior ao desacoplar tanto nossas codebases quanto nossos ciclos de lançamento, avançamos significativamente em direção a ter equipes totalmente independentes, capazes de possuir uma seção de um produto desde a concepção até a produção e além. As equipes podem ter a propriedade completa de tudo o que precisam para entregar valor aos clientes, o que lhes permite se movimentar rapidamente e de forma eficaz. Para que isso funcione, nossas equipes precisam ser formadas em torno de fatias verticais de funcionalidade de negócios, em vez de capacidades técnicas. Uma maneira fácil de fazer isso é dividir o produto com base no que os usuários finais verão, para que cada micro frontend encapsule uma única página da aplicação e seja totalmente de propriedade de uma única equipe. Isso traz uma maior coesão ao trabalho das equipes do que se as equipes fossem formadas em torno de preocupações técnicas horizontais como estilo, formulários ou validação.</p>


            <h4>Desvantagens dos Micro Frontends</h4>

            <h5>1. Tamanho do Payload</h5>
            <p>Os pacotes JavaScript independentemente construídos podem causar duplicação de dependências comuns, aumentando a quantidade de bytes que precisamos enviar pela rede para nossos usuários finais. Por exemplo, se cada micro frontend incluir sua própria cópia do React, estaremos obrigando nossos clientes a baixar o React n vezes. Existe uma relação direta entre o desempenho da página e o envolvimento/conversão do usuário, e grande parte do mundo funciona em infraestrutura de internet muito mais lenta do que aquelas em cidades altamente desenvolvidas estão acostumadas, então temos muitas razões para nos preocupar com os tamanhos de download.</p>

            <p>Esta questão não é fácil de resolver. Existe uma tensão inerente entre nosso desejo de permitir que as equipes compilarem suas aplicações de forma independente para que possam trabalhar autonomamente, e nosso desejo de construir nossas aplicações de uma forma que elas possam compartilhar dependências comuns. Uma abordagem é externalizar dependências comuns de nossos pacotes compilados, como descrevemos para a aplicação de demonstração. No entanto, assim que seguimos por esse caminho, reintroduzimos algum acoplamento de construção aos nossos micro frontends. Agora há um contrato implícito entre eles que diz: todos nós devemos usar exatamente essas versões dessas dependências. Se houver uma alteração incompatível em uma dependência, podemos acabar precisando de um grande esforço coordenado de atualização e um evento de lançamento pontual. Isso é exatamente o que estávamos tentando evitar com os micro frontends em primeiro lugar!</p>

            <p>Esta tensão inerente é difícil, mas nem tudo são más notícias. Em primeiro lugar, mesmo que escolhamos não fazer nada em relação a dependências duplicadas, é possível que cada página individual ainda carregue mais rápido do que se tivéssemos construído um único frontend monolítico. A razão é que, compilando cada página independentemente, efetivamente implementamos nossa própria forma de divisão de código. Em monolitos clássicos, quando qualquer página da aplicação é carregada, frequentemente baixamos o código-fonte e as dependências de todas as páginas de uma vez. Ao construir independentemente, qualquer carregamento de página único só baixará o código-fonte e as dependências dessa página. Isso pode resultar em carregamentos iniciais de página mais rápidos, mas navegações subsequentes mais lentas, já que os usuários são forçados a baixar as mesmas dependências em cada página. Se formos disciplinados em não inflar nossos micro frontends com dependências desnecessárias, ou se soubermos que os usuários geralmente se limitam a uma ou duas páginas dentro da aplicação, podemos alcançar um ganho líquido em termos de desempenho, mesmo com dependências duplicadas.</p>

            <p>Há muitos pode ser e possivelmente no parágrafo anterior, o que destaca o fato de que cada aplicação sempre terá suas próprias características de desempenho exclusivas. Se você quiser ter certeza dos impactos de desempenho de uma alteração específica, não há substituto para medições do mundo real, idealmente em produção. Já vimos equipes agonizarem por alguns quilobytes extras de JavaScript, apenas para baixar muitos megabytes de imagens de alta resolução ou executar consultas caras em um banco de dados muito lento. Portanto, embora seja importante considerar os impactos de desempenho de cada decisão arquitetônica, certifique-se de saber onde estão os gargalos reais.</p>

            <h5>2. Diferenças Ambientais</h5>
            <p>Deveríamos ser capazes de desenvolver um único micro frontend sem precisar pensar em todos os outros micro frontends sendo desenvolvidos por outras equipes. Podemos até conseguir executar nosso micro frontend no modo independente, em uma página em branco, em vez de dentro da aplicação contêiner que o abrigará na produção. Isso pode simplificar bastante o desenvolvimento, especialmente quando o contêiner real é um código legado e complexo, o que geralmente ocorre quando usamos micro frontends para realizar uma migração gradual do antigo para o novo. No entanto, existem riscos associados ao desenvolvimento em um ambiente que é bastante diferente da produção. Se o contêiner durante o desenvolvimento se comportar de maneira diferente do contêiner de produção, podemos descobrir que nosso micro frontend está quebrado ou se comporta de maneira diferente quando implantamos na produção. De particular preocupação são estilos globais que podem ser trazidos pelo contêiner ou por outros micro frontends.</p>

            <p>A solução aqui não é muito diferente de qualquer outra situação em que precisamos nos preocupar com diferenças ambientais. Se estamos desenvolvendo localmente em um ambiente que não é semelhante à produção, precisamos garantir que integremos e implantemos regularmente nosso micro frontend em ambientes semelhantes à produção e devemos realizar testes (manuais e automatizados) nesses ambientes para identificar problemas de integração o mais cedo possível. Isso não resolverá completamente o problema, mas, em última análise, é mais um trade-off que temos que considerar: a vantagem de um ambiente de desenvolvimento simplificado vale o risco de problemas de integração? A resposta dependerá do projeto!</p>

            <h5>3. Complexidade Operacional e de Governança</h5>
            <p>A última desvantagem tem um paralelo direto com microsserviços. Como uma arquitetura mais distribuída, os micro frontends inevitavelmente levarão a ter mais coisas para gerenciar — mais repositórios, mais ferramentas, mais pipelines de construção/implantação, mais servidores, mais domínios, etc. Então, antes de adotar tal arquitetura, há algumas perguntas que você deve considerar:</p>

            <ul>
              <li>Você tem automação suficiente para provisionar e gerenciar a infraestrutura adicional necessária de forma viável?</li>
              <li>Seus processos de desenvolvimento, teste e lançamento de frontend serão dimensionados para muitas aplicações?</li>
              <li>Você está confortável com as decisões em torno de ferramentas e práticas de desenvolvimento se tornando mais descentralizadas e menos controláveis?</li>
              <li>Como você garantirá um nível mínimo de qualidade, consistência ou governança em todas as suas muitas codebases frontend independentes?</li>
            </ul>

            <p className='mt-5'>
              <h4>Referências</h4>
              <ul>
                  <li>https://micro-frontends.org</li>
                  <li>https://martinfowler.com/articles/micro-frontends.html</li>
                  <li>https://medium.com/@rajithacharith/introduction-to-micro-frontends-283aa1e126c5</li>
                </ul>
            </p>

          </CCardBody>
        </CCard>


        <CCard>
        <CCardBody>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="primary" className="me-md-2">
                  Voltar
                </CButton>
                <CButton color="primary">Avançar</CButton>
        </div>
        </CCardBody>
        </CCard>

      </CCol>
    </CRow>
  )
};
export default IntroducaoMicrofrontend;
