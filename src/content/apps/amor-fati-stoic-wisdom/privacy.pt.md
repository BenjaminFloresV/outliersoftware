# Política de Privacidade

**Amor Fati: Stoic Wisdom** · Última atualização: 2 de outubro de 2026

*Esta é uma tradução. Se houver diferenças em relação à [versão em inglês](#/android/app/amor-fati-stoic-wisdom/privacy?lang=en), prevalece a versão em inglês.*

Esta política explica quais informações o app Amor Fati: Stoic Wisdom para Android ("o app") trata, onde elas ficam guardadas, quem pode vê-las e o que você pode fazer a respeito.

## Resumo

- Quase tudo o que você faz no app fica no seu celular.
- Seu progresso, seu diário e seus exames da noite são copiados para a nuvem somente se você tiver o Premium **e** tiver entrado com o Google.
- O app não tem anúncios nem ferramentas de análise ou rastreamento. Não vendemos suas informações nem as compartilhamos para fins de publicidade.
- Você pode nos pedir a qualquer momento que excluamos sua conta e seus dados da nuvem.

## Quem é responsável pelos seus dados

O app é desenvolvido por Benjamín Flores, pessoa física residente no Chile, sob o nome Outlier Software. Ele é o controlador dos dados pessoais descritos nesta política. Nesta política, "nós" se refere a ele.

Contato: [benjamin.floresjv@gmail.com](mailto:benjamin.floresjv@gmail.com)

## O que fica no seu celular

O app guarda no seu dispositivo:

- **Seu progresso:** sua sequência, as frases que você já viu e seu nível.
- **Seu diário:** o que você escreve sobre a frase de cada dia.
- **Seus exames da noite:** suas respostas às três perguntas da noite.
- **Suas configurações,** como o som, os lembretes e o bloqueio do diário.

Nós não podemos ver nada disso. Nada é enviado para nós, a menos que você use o backup na nuvem (veja a próxima seção).

- **Backup do Android.** Se o backup estiver ativado nas configurações do seu celular, o Android copia seu progresso, seu diário, seus exames da noite e algumas configurações para a sua Conta do Google, para que possam ser restaurados em um celular novo. O Google guarda esse backup na sua conta. Nós não temos acesso a ele.
- **Bloqueio do diário.** Se você bloquear o diário, o app pede ao Android que verifique sua impressão digital, seu rosto ou o bloqueio de tela. Quem faz a verificação é o Android. O app nunca recebe seus dados biométricos nem o seu bloqueio de tela.
- **Lembretes.** As notificações são programadas no seu celular; nada é enviado para nós para exibi-las. Alguns lembretes mostram um pequeno trecho de uma entrada antiga do seu diário.
- **Compartilhar e exportar.** Quando você compartilha uma frase como imagem ou exporta seu diário em PDF, o arquivo é criado no seu celular e só vai para onde você decidir enviá-lo ou salvá-lo.

## O que fica na nuvem (Premium com login do Google)

Se você tiver o Premium e entrar com sua Conta do Google, o app guarda uma cópia dos seus dados na nuvem para que você possa restaurá-los em um celular novo e usá-los em mais de um dispositivo. Guardamos:

- **Sua conta,** por meio do Firebase Authentication: o e-mail, o nome e o link da foto de perfil da sua Conta do Google, e um identificador de usuário atribuído pelo Firebase.
- **Seu progresso:** sua sequência e a data da sua última visita, as frases que você ainda não viu e o último autor exibido, seu nível mais alto e duas configurações (se o som está ligado e se você já viu as dicas).
- **Seu diário:** para cada dia, o texto que você escreveu e a frase a que ele corresponde.
- **Seus exames da noite:** para cada dia, suas três respostas.

Esses dados são guardados no Google Cloud Firestore, em servidores nos Estados Unidos. Eles ficam vinculados ao seu identificador de usuário, e as regras do banco de dados só permitem que a sua conta, com login feito, os leia ou altere.

Se o seu Premium terminar, o app deixa de enviar novas alterações. O que já está na nuvem continua lá até que você nos peça para excluir.

## Compras

O Premium é uma assinatura vendida pelo Google Play. O Google processa o pagamento; nós nunca vemos seu cartão nem outros dados de pagamento. O app só recebe do Google Play a informação de que sua assinatura está ativa e guarda isso no seu celular. A [Política de Privacidade do Google](https://policies.google.com/privacy?hl=pt-BR) se aplica à compra.

## O que os serviços que usamos tratam

- **O Firebase Remote Config** nos permite ajustar algumas opções, como os limites entre níveis, sem publicar uma atualização. Para isso, o SDK do Firebase cria um identificador de instalação aleatório e o envia ao Google junto com dados técnicos como a versão do app, a versão do Android e o idioma do dispositivo.
- **Os servidores do Google recebem seu endereço IP** sempre que o app se conecta a eles, como acontece com qualquer serviço de internet.
- **Os serviços do Google Play** cuidam do login com o Google e das compras.

O Google nos fornece o Firebase como prestador de serviços (operador), nos termos dos [termos de processamento de dados do Firebase](https://firebase.google.com/terms/data-processing-terms). Saiba mais em [Privacidade e segurança no Firebase](https://firebase.google.com/support/privacy).

## O que o app não faz

- Não mostra anúncios.
- Não usa ferramentas de análise, de relatórios de falhas nem de rastreamento.
- Não acessa sua localização, seus contatos, sua câmera nem seu microfone.
- Não usa inteligência artificial para processar seus dados.
- Não vendemos suas informações pessoais nem as compartilhamos para fins de publicidade.

## Quem pode ver seus dados na nuvem

- **Você,** em qualquer celular onde entrar com a mesma Conta do Google.
- **O Google,** que hospeda o banco de dados para nós como prestador de serviços.
- **O desenvolvedor.** Como dono do projeto do Firebase, o desenvolvedor pode tecnicamente ler os dados da nuvem, porque eles não têm criptografia de ponta a ponta. Só acessamos esses dados para atender a um pedido seu (por exemplo, de suporte ou de exclusão) ou quando a lei exige.
- **Autoridades,** somente quando a lei nos obrigar a fornecê-los.

Seus dados trafegam criptografados entre o seu celular e os servidores do Google, e o Google os armazena criptografados.

## Para que usamos seus dados (bases legais)

Se a LGPD (Brasil) ou o RGPD (União Europeia, Reino Unido) se aplica a você, estas são as nossas bases legais:

- **Prestar o serviço que você pediu** (execução de contrato): guardar e sincronizar seus dados quando você usa o backup na nuvem, e verificar sua assinatura.
- **Nosso legítimo interesse:** manter o app funcionando e seguro, e ajustar suas opções remotamente.
- **Obrigações legais,** como responder a solicitações de autoridades.

Não usamos seus dados para nenhuma outra finalidade, e nunca usamos seu diário nem seus exames da noite para traçar seu perfil.

## Transferências internacionais

Os dados da nuvem são guardados nos Estados Unidos. Se você mora em outro país, seus dados são transferidos para lá quando você usa o backup na nuvem. O Google protege essas transferências com as garantias que a lei exige, como as cláusulas contratuais padrão da Comissão Europeia.

## Por quanto tempo guardamos seus dados

- **No seu celular:** até que você os apague, limpe o armazenamento do app ou desinstale o app.
- **Na nuvem:** enquanto sua conta existir. Quando você nos pedir para excluir sua conta, nós a excluiremos junto com seus dados da nuvem em até 30 dias. Não guardamos cópias de segurança do banco de dados, então os dados excluídos não podem ser recuperados.
- **Os registros de compra** são guardados pelo Google Play conforme as políticas dele.

## Seus direitos

Dependendo de onde você mora, você pode ter o direito de acessar seus dados, corrigi-los, excluí-los, receber uma cópia, se opor ao uso que fazemos deles ou restringi-lo, e apresentar reclamação à autoridade de proteção de dados do seu país.

- Você pode ver e editar seu diário e seus exames da noite no app a qualquer momento, e exportá-los em PDF.
- Para excluir sua conta e seus dados da nuvem, siga os passos de [Como excluir sua conta](#/android/app/amor-fati-stoic-wisdom/delete-account?lang=pt).
- Para qualquer outra coisa, escreva para nós. Podemos pedir que você escreva a partir do e-mail da sua Conta do Google para confirmar que o pedido é seu. Responderemos em até 30 dias.

Se você mora na Califórnia: não vendemos nem compartilhamos suas informações pessoais, no sentido que a CCPA dá a esses termos.

## Menores de idade

O app não é destinado a menores de 16 anos. Não coletamos intencionalmente informações pessoais de menores de 16 anos. Se você acredita que um menor de 16 anos nos forneceu informações pessoais, escreva para nós e as excluiremos.

## Segurança

As regras do banco de dados só permitem que cada conta leia e altere os próprios dados. Ainda assim, seu celular é a chave do seu diário: quem conseguir desbloqueá-lo pode abrir o app, a menos que você use o bloqueio do diário. Proteja seu celular com um bloqueio de tela.

## Alterações nesta política

Quando alterarmos esta política, atualizaremos esta página e a data no início. Se uma alteração afetar de forma importante o uso dos seus dados, avisaremos você com antecedência por um meio razoável, como um aviso no app.

## Contato

Se você tiver dúvidas sobre esta política ou sobre seus dados, escreva para [benjamin.floresjv@gmail.com](mailto:benjamin.floresjv@gmail.com).
