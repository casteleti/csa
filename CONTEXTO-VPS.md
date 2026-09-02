# Contexto para configuração da VPS — Site CSA

Documento de referência para publicar o projeto `site-csa-v1` nesta máquina.

**Última coleta:** 02/09/2026 (UTC)

## 1. Projeto

- **Repositório:** https://github.com/daksa-renato/site-csa-v1
- **Diretório atual:** `/srv/projects/csa`
- **Tipo:** aplicação web React + TanStack Start + Vite + Nitro
- **Gerenciador preferencial do repositório:** Bun (`bun.lock` existe)
- **Gerenciador disponível nesta máquina:** npm 11.17.0
- **Node.js disponível:** v24.19.0
- **Scripts principais:**
  - `npm run dev` — desenvolvimento
  - `npm run build` — build de produção
  - `npm run preview` — preview local
  - `npm run lint` — validação ESLint
- **Dependências instaladas:** `node_modules/`
- **Build validado:** `npm run build` concluído com sucesso em 02/09/2026
- **Saída de produção:** `.output/`
- **Entrada do servidor Nitro:** `.output/server/index.mjs`

## 2. Servidor atual

- **Hostname:** `daksasrv`
- **Sistema operacional:** Ubuntu 26.04 LTS (Resolute Raccoon)
- **Kernel:** Linux 7.0.0-30-generic x86_64
- **CPU:** 4 vCPUs
- **Memória:** 7.2 GiB total; aproximadamente 2.5 GiB disponível na coleta
- **Swap:** 4 GiB; estava praticamente cheia na coleta — investigar antes de carga de produção
- **Disco raiz/projeto:** 426 GiB total, 68 GiB usados, 340 GiB livres (17% usado)
- **Diretório do projeto:** `/srv/projects/csa`
- **Interface LAN:** `192.168.0.105`
- **Interface Tailscale:** `tailscale0`

## 3. Tailscale

- **Estado:** ativo e conectado
- **IPv4 Tailscale:** `100.125.165.77`
- **MagicDNS:** habilitado
- **Nome MagicDNS:** `daksasrv.tailbdc681.ts.net`
- **Tailnet:** `daksa.com.br`
- **URL atual do projeto:** http://100.125.165.77:8080
- O acesso pelo IPv4 Tailscale foi validado com HTTP 200.
- O hostname MagicDNS retornou HTTP 403 no servidor de desenvolvimento por restrição de host do Vite; para produção, o proxy reverso deverá aceitar o domínio configurado.

## 4. Estado atual da aplicação

A aplicação está sendo executada em modo desenvolvimento com:

```bash
npm run dev -- --host 0.0.0.0
```

Porta atual: `8080`.

Esse processo é temporário e não deve ser usado como serviço definitivo de produção. Para produção, usar o build Nitro e um gerenciador de processo (`systemd`, preferencialmente, ou Docker).

## 5. Comando recomendado para produção

No diretório do projeto:

```bash
npm ci --omit=dev
npm run build
HOST=127.0.0.1 PORT=3000 node .output/server/index.mjs
```

Observação: o build depende das ferramentas de desenvolvimento. Portanto, em uma implantação limpa, executar primeiro `npm ci`, depois `npm run build`, e só então remover dependências de desenvolvimento se desejado.

## 6. Arquitetura recomendada

```text
Internet / Tailscale
        |
   Nginx ou Caddy :80/:443
        |
   Site CSA :3000 (127.0.0.1)
```

- O Node deve escutar apenas em `127.0.0.1:3000`.
- O proxy reverso deve terminar HTTPS e encaminhar para o Node.
- Se o acesso for somente pela VPN, expor o proxy na interface Tailscale ou restringir firewall ao bloco Tailscale.
- A porta `80` já estava ocupada na coleta; identificar o serviço antes de instalar/configurar Nginx ou Caddy.
- Também havia serviços nas portas `22`, `3306`, `3307`, `4321`, `4322`, `5433`, `8080`, `8081`, `8082`, `8090`, `32768` e outras portas locais. Não reutilizar portas sem confirmar o processo responsável.

## 7. Exemplo de unidade systemd

Criar `/etc/systemd/system/site-csa.service` com o usuário de deploy adequado:

```ini
[Unit]
Description=Site CSA
After=network.target

[Service]
Type=simple
User=daksa
WorkingDirectory=/srv/projects/csa
Environment=NODE_ENV=production
Environment=HOST=127.0.0.1
Environment=PORT=3000
ExecStart=/usr/bin/node /srv/projects/csa/.output/server/index.mjs
Restart=always
RestartSec=5
KillSignal=SIGINT

[Install]
WantedBy=multi-user.target
```

Validar o caminho real do Node com `command -v node` antes de ativar a unidade. Depois:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now site-csa
sudo systemctl status site-csa
curl -I http://127.0.0.1:3000
```

## 8. Procedimento de publicação

```bash
cd /srv/projects/csa
git pull --ff-only origin main
npm ci
npm run lint
npm run build
sudo systemctl restart site-csa
curl -I http://127.0.0.1:3000
```

Antes do primeiro `git pull`, configurar o repositório Git corretamente: o diretório `.git` presente originalmente é um diretório de infraestrutura vazio e não contém um checkout funcional.

## 9. Checklist antes de colocar em produção

- [ ] Confirmar domínio público e DNS apontando para a VPS.
- [ ] Decidir se o acesso será público, somente Tailscale ou ambos.
- [ ] Identificar o processo que ocupa a porta `80`.
- [ ] Escolher Nginx ou Caddy e configurar HTTPS.
- [ ] Criar usuário de deploy sem privilégios de root.
- [ ] Configurar o repositório Git e a chave de deploy.
- [ ] Criar `.env` de produção, se novas variáveis forem necessárias; nunca versionar segredos.
- [ ] Configurar `systemd` e política de reinício.
- [ ] Configurar firewall liberando somente SSH, HTTP/HTTPS e/ou Tailscale conforme a decisão de exposição.
- [ ] Corrigir ou monitorar o uso de swap, que estava quase esgotada na coleta.
- [ ] Configurar logs, backup e atualização de segurança do Ubuntu.
- [ ] Testar páginas, assets, rotas SSR e reinício após reboot.

## 10. Pendências conhecidas

1. O projeto foi copiado para a pasta de trabalho, mas o `.git` local não é um repositório funcional.
2. O servidor atual é de desenvolvimento (`vite dev`) e deve ser substituído pelo serviço de produção.
3. A porta `80` já está em uso.
4. Não há domínio de produção definido neste documento.
5. A configuração de variáveis de ambiente e integrações externas ainda precisa ser confirmada.
