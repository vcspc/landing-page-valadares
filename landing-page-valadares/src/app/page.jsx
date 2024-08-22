import Botao from '../../components/Botao';
import Card from '../../components/Card';
import Titulo from '../../components/Titulo';
import Perfil from '../../components/Perfil';
import Topico from '../../components/Topico';
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <div className="container__video">
        <Botao 
          link="https://www.google.com.br"
          texto="ENTRE EM CONTATO"
          cor="botao-escuro"
        />

        <p>Lidar com processos judiciais, contratos mal elaborados, processos trabalhistas, LGPD, dúvidas jurídicas e outros problemas judiciais podem ser um fardo para sua empresa. <span>Imagine ter um time jurídico especializado que te blinde de riscos e te impulsione para o sucesso?</span></p>
      </div>

      <div className="container__faixa">
        <p>Somos o Escritório de Advocacia Valadares e Fueta Advogados.
        <span> Seu escudo jurídico no mundo empresarial.</span></p>
      </div>

      <div className="container__solucoes">
        <Titulo titulo="SOLOÇÕES PERSONALIZADAS" cor="titulo-escuro"/>
        <div className="container__solucoes__cards">
          <div className="container__solucoes__cards__linha">
            <Card 
              icone="/departamento.svg"
              alt="icone em vetor de balões de conversa"
              titulo="SEU DEPARTAMENTO JURÍDICO"
              descricao="Assessoria jurídica consultiva, preventiva e contenciosa para auxílio nas tomadas de decisões do dia a dia empresarial."
            />
            <Card 
              icone="/departamento.svg"
              alt="icone em vetor de balões de conversa"
              titulo="SEU DEPARTAMENTO JURÍDICO"
              descricao="Assessoria jurídica consultiva, preventiva e contenciosa para auxílio nas tomadas de decisões do dia a dia empresarial."
            />
          </div>
          <div className="container__solucoes__cards__linha">
            <Card 
              icone="/departamento.svg"
              alt="icone em vetor de balões de conversa"
              titulo="SEU DEPARTAMENTO JURÍDICO"
              descricao="Assessoria jurídica consultiva, preventiva e contenciosa para auxílio nas tomadas de decisões do dia a dia empresarial."
            />
            <Card 
              icone="/departamento.svg"
              alt="icone em vetor de balões de conversa"
              titulo="SEU DEPARTAMENTO JURÍDICO"
              descricao="Assessoria jurídica consultiva, preventiva e contenciosa para auxílio nas tomadas de decisões do dia a dia empresarial."
            />
          </div>
          <div className="container__solucoes__cards__linha">
            <Card 
              icone="/departamento.svg"
              alt="icone em vetor de balões de conversa"
              titulo="SEU DEPARTAMENTO JURÍDICO"
              descricao="Assessoria jurídica consultiva, preventiva e contenciosa para auxílio nas tomadas de decisões do dia a dia empresarial."
            />
            <Card 
              icone="/departamento.svg"
              alt="icone em vetor de balões de conversa"
              titulo="SEU DEPARTAMENTO JURÍDICO"
              descricao="Assessoria jurídica consultiva, preventiva e contenciosa para auxílio nas tomadas de decisões do dia a dia empresarial."
            />
          </div>
        </div>
        <Botao 
          link="https://www.google.com.br"
          texto="ENTRE EM CONTATO"
          cor="botao-escuro"
        />
      </div>

      <div className="container__quemsomos">
        <Titulo titulo="CONHEÇA QUEM SOMOS" cor="titulo-escuro"/>
        <div className="container__quemsomos__texto">
          <p>
          Nossa equipe é liderada por sócios com mais de 15 anos de experiência na advocacia.<br/><br />
          No Escritório Valadares e Fueta Advogados, acreditamos que o sucesso do seu negócio  está diretamente ligado à segurança jurídica de suas ações. Por isso, oferecemos serviços especializados em direito empresarial e direito digital, com foco em proteger seus  resultados.<br /><br />
          Acreditamos também em um atendimento personalizado, que compreenda as necessidades e desafios específicos do seu negócio.
          </p>
          <img src="/mosaico.svg" alt="" />
        </div>
        <Link href="https://www.google.com.br" className="container__quemsomos__link">
          <div className="container__quemsomos__link__instagram" >
            <img src="/logo_instagram.svg" alt="" />
            <p>valadaresefueta.adv</p>
          </div>
        </Link>
      </div>

      <div className="container__socios">
        <Titulo titulo="SÓCIOS" cor="titulo-escuro"/>
        <div className="container__socios__perfis">
          <Perfil 
            foto="/cesar.svg"
            alt="foto de perfil do sócio César"
            nome="Cesar Fueta"
            descricao="Advogado desde 2001 e advogado de empresa pública desde 2005. Inscrito na OAB/RJ sob n° 113.167 e na OAB/SP sob o n° 460.093-A. Graduado em Direito pela UFRJ em 2001, pós-graduado MBA em Direito Empresarial pela FGV em 2004 e pós-graduado em Direito Digital pela faculdade CERS em 2019."
          />
          <Perfil 
            foto="/cesar.svg"
            alt="foto de perfil do sócio César"
            nome="Cesar Fueta"
            descricao="Advogado desde 2001 e advogado de empresa pública desde 2005. Inscrito na OAB/RJ sob n° 113.167 e na OAB/SP sob o n° 460.093-A. Graduado em Direito pela UFRJ em 2001, pós-graduado MBA em Direito Empresarial pela FGV em 2004 e pós-graduado em Direito Digital pela faculdade CERS em 2019."
          />
        </div>
        <Botao 
          link="https://www.google.com.br"
          texto="ENTRE EM CONTATO"
          cor="botao-escuro"
        />
      </div>

      <div className="container__beneficios">
        <Titulo titulo="POR QUE CONTRATAR NOSSA ASSESSORIA?" cor="titulo-claro"/>
        <div className="container__beneficios__topicos">
          <Topico 
            topico="Expertise com pequenas e médias empresas:"
            descricao=" Nossa equipe é composta por advogados especializados em direito empresarial e direito digital, com profundo conhecimento no mundo dos negócios e seus desafios."
          />
          <Topico 
            topico="Expertise com pequenas e médias empresas:"
            descricao=" Nossa equipe é composta por advogados especializados em direito empresarial e direito digital, com profundo conhecimento no mundo dos negócios e seus desafios."
          />
          <Topico 
            topico="Expertise com pequenas e médias empresas:"
            descricao=" Nossa equipe é composta por advogados especializados em direito empresarial e direito digital, com profundo conhecimento no mundo dos negócios e seus desafios."
          />
          <Topico 
            topico="Expertise com pequenas e médias empresas:"
            descricao=" Nossa equipe é composta por advogados especializados em direito empresarial e direito digital, com profundo conhecimento no mundo dos negócios e seus desafios."
          />
        </div>
        <Botao 
          link="https://www.google.com.br"
          texto="ENTRE EM CONTATO"
          cor="botao-claro"
        />
      </div>
      <div className="container__formulario">
        <div className="container__formulario__titulo">
          <Titulo titulo="POR QUE CONTRATAR NOSSA ASSESSORIA?" cor="titulo-claro"/>
        </div>
        <form className="container__formulario__form">
          <div className="container__formulario__form__nome">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" />
          </div>
          <div className="container__formulario__form__empresa">
            <label htmlFor="empresa">Empresa</label>
            <input type="text" id="empresa" name="empresa" />
          </div>
          <div className="container__formulario__form__cargo">
            <label htmlFor="cargo">Cargo</label>
            <input type="text" id="cargo" name="cargo" />
          </div>
          <div className="container__formulario__form__email">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="container__formulario__form__telefone">
            <label htmlFor="telefone">Telefone</label>
            <input type="text" id="telefone" name="telefone" />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>

      

      

      

      
    </main>
  )
}

