# Aplicativo de Temporizador e Lista de Tarefas

Este projeto combina um temporizador com uma lista de tarefas, permitindo gerenciar seu tempo e tarefas de forma eficaz.

## Funcionalidades

### Temporizador

- **Iniciar/Pausar/Parar Temporizador**: Controle completo sobre o cronômetro.
- **Adicionar Minutos**: Use um modal para adicionar mais tempo.
- **Controles de Áudio**: Reproduza e silencie áudio via YouTube.

### Lista de Tarefas

- **Adicionar Tarefa**: Insira novas tarefas na lista.
- **Marcar Tarefa**: Marque tarefas como concluídas.
- **Remover Tarefa**: Exclua tarefas da lista.

## Configuração

### Elementos HTML

Certifique-se de que seu HTML contém os seguintes elementos:

#### Temporizador:

- Botões: `.btn-play`, `.btn-pause`, `.btn-stop`, `.btn-plus`
- Áudio: `.audio-play`, `.audio-mute`
- Modal: `#modalBTN`, `#modalADD`, `#modalID`
- Display: `#display` (formato `MM:SS`)

#### Lista de Tarefas:

- Lista: `<ul>`
- Entrada: `<input>`
- Formulário: `<form>`

### API do YouTube IFrame

Inclua a API no seu HTML para habilitar a reprodução de vídeos.

## Funções

### Temporizador

- `updateDisplay(newMinutes, seconds)`: Atualiza o cronômetro.
- `countDown()`: Gerencia a contagem regressiva.
- `play() / pause() / stop()`: Controles do temporizador.
- `addMinuts()`: Adiciona minutos via modal.
- `onYouTubeIframeAPIReady()`: Inicializa o player do YouTube.
- `playAudio() / muteAudio()`: Controles de áudio.

### Lista de Tarefas

- `addNewTask()`: Adiciona nova tarefa.
- `checkedTask()`: Marca tarefas como concluídas.
- `removeTask()`: Remove tarefas.

## Inicialização

- `controls()`: Inicializa todos os event listeners.

## Uso

### Temporizador:

- Inicie, pause ou pare o cronômetro.
- Adicione minutos através do modal.
- Controle a reprodução de áudio.

### Lista de Tarefas:

- Adicione tarefas usando o formulário.
- Marque tarefas clicando nelas.
- Remova tarefas clicando no ícone de remoção.

## Requisitos

- Navegador com JavaScript habilitado.
- Conexão com a internet para a API do YouTube.

## Licença

Este projeto é de código aberto e está disponível sob a Licença MIT.