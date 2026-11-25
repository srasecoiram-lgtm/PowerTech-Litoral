# LitoralTec

Site da LitoralTec, desentupidora e dedetizadora da Baixada Santista. A interface usa React, React Router, Vite e os materiais visuais do projeto.

## Desenvolvimento e publicação

Use Node.js 20+ e npm.

```bash
npm ci
npm run dev
npm run build
```

Publique o conteúdo de `dist/` no diretório público da hospedagem. Inclua o arquivo oculto `.htaccess` em hospedagens Apache/cPanel. Os módulos `mod_rewrite` e `mod_headers` e a permissão `AllowOverride FileInfo` permitem servir diretamente as rotas pré-renderizadas, aplicar os cabeçalhos e devolver o HTML correto em erros 404. Em outra hospedagem, configure o roteamento, a página 404 e os cabeçalhos equivalentes. Use HTTPS no domínio oficial.

O build gera HTML, metadados canônicos, sitemap e robots.txt. Os diretórios `src/`, `backend/` e `dist-ssr/` pertencem ao código-fonte e executáveis internos.

## Páginas de campanha

| Serviço | Caminho |
| --- | --- |
| Desentupimento de emergência | `/desentupidora` |
| Dedetização e controle de pragas | `/dedetizacao` |
| Limpeza de caixa d’água e fossa | `/limpeza-caixa-dagua-fossa` |

Os três endereços aceitam `?cidade=santos`. As cidades disponíveis estão em `src/components/landingData.js`. O filtro atualiza o título e a mensagem de WhatsApp, e a URL canônica continua sendo a do serviço.

A tag existente do Google Ads é ativada após aceite no domínio oficial. WhatsApp e telefone registram cliques na ação de conversão existente, com canal e posição do botão. A medição representa intenção de contato. O visitante revisa os dados do orçamento no navegador antes de abrir o WhatsApp.

Depois da publicação, valide no [Google Tag Assistant](https://tagassistant.google.com/) tanto recusa quanto aceite, e confira se o clique consentido chega à ação de conversão correta na conta. Verifique também o acesso direto a cada landing page e a resposta de erro para um endereço inexistente.

## Integração opcional do Instagram

O site estático funciona por conta própria. Para usar o servidor opcional, execute `npm run api` e forneça as credenciais por variáveis de ambiente:

- `META_APP_SECRET` e `META_WEBHOOK_VERIFY_TOKEN` habilitam a verificação e o webhook assinado.
- `INSTAGRAM_ACCESS_TOKEN` e `INSTAGRAM_FEED_KEY` habilitam `GET /instagram-posts`, com a chave do feed em `Authorization: Bearer …`.
- `HOST` e `PORT` são opcionais. O padrão é `127.0.0.1:3001`.

Se a integração estiver ativa em produção, revogue as credenciais antigas no painel da Meta e configure novas credenciais e um token de verificação independente. Hospede o Node atrás de um proxy HTTPS que preserve o corpo e o cabeçalho `X-Hub-Signature-256` do webhook.
