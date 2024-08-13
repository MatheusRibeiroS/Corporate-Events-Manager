# Corporate Event Management System

## Sumário

- [Visão Geral](#visão-geral)
- [Arquitetura](#arquitetura)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)
- [Serviços](#serviços)
- [Autenticação](#autenticação)
- [Notificações](#notificações)
- [CI/CD](#cicd)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

Este projeto de Gestão de Eventos Corporativos foi desenvolvido com o intuito de ser um portfólio, demonstrando o desenvolvimento de uma arquitetura moderna baseada em microserviços. A aplicação permite gerenciar eventos corporativos, abrangendo a criação, atualização e consulta de eventos. A solução é composta por múltiplos microserviços que comunicam-se por meio de uma API Gateway. Além disso, o sistema integra autenticação segura com JWT e um serviço de notificações eficiente utilizando RabbitMQ.

## Arquitetura

A arquitetura do sistema é baseada em microserviços, com os seguintes componentes principais:

![Arquitetura](path/para/sua/imagem.png)

- **API Gateway**: Centraliza e distribui as requisições para os serviços apropriados. Responsável pela autenticação usando tokens JWT.
- **Auth Service**: Gerencia a autenticação e autorização de usuários, incluindo registro, login e geração de tokens JWT.
- **Event Management Service**: Gerencia eventos corporativos, incluindo a criação, atualização e consulta de eventos.
- **Notification Service**: Consome mensagens do RabbitMQ e envia notificações por canais como e-mail e SMS.
- **RabbitMQ**: Broker de mensagens para comunicação entre os serviços.

## Tecnologias Utilizadas

- **TypeScript**
- **Node.js com Express**
- **Java com Spring Framework**
- **RabbitMQ**
- **JWT (JSON Web Token)**
- **Docker**
- **PostgreSQL**

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/MatheusRibeiroS/Corporate-Events-Manager.git
   cd "nome do módulo que deseja executar"