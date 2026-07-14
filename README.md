<p align="center">
  <img width="150" alt="glitch" src="https://github.com/user-attachments/assets/68c96547-cc6f-41ed-9001-21d4905976c6" />
</p>

# Zentra - AI Web Automation (Co-pilot)

Zentra is an intelligent Chrome extension that leverages AI to automate web interactions and tasks. Built with modern web technologies and a robust monorepo architecture, it provides a powerful platform for AI-driven web automation.

## 🚀 Features

- *AI-Powered Automation*: Integrates with multiple LLM providers (OpenAI, Anthropic, Google, Groq, Ollama, and more)
- *Smart Web Navigation*: Intelligent DOM interaction and page navigation
- *Multi-Provider Support*: Flexible AI model selection and configuration
- *Modern UI*: React-based interface with Tailwind CSS styling
- *Internationalization*: Multi-language support with i18n
- *Developer Experience*: Hot module reload, TypeScript, and comprehensive tooling

## 🛠 Tech Stack

### Core Technologies
- *Language*: TypeScript 5.5, JavaScript
- *UI Framework*: React 18
- *Styling*: Tailwind CSS 3, PostCSS, Autoprefixer
- *Build Tool*: Vite 6 with React SWC plugin
- *Package Manager*: pnpm 9.15.1
- *Monorepo*: Turborepo

### AI & Automation
- *LangChain Ecosystem*: Core, OpenAI, Anthropic, Google GenAI, Groq, Ollama, Cerebras, XAI, DeepSeek
- *Schema Validation*: Zod, zod-to-json-schema
- *Web Automation*: Puppeteer Core
- *JSON Processing*: jsonrepair

### Development Tools
- *Linting*: ESLint (Airbnb TypeScript config)
- *Formatting*: Prettier
- *Testing*: Vitest
- *Hot Reload*: Custom HMR implementation
- *Git Hooks*: Husky + lint-staged

### Browser Extension
- *Platform*: Chrome/Firefox WebExtension
- *Polyfill*: webextension-polyfill
- *Manifest*: V3 compatible

## 📦 Project Structure


zenstr/
├── chrome-extension/          # Core extension background scripts
│   ├── src/background/        # Background service workers
│   │   ├── agent/            # AI agent implementation
│   │   ├── browser/          # Browser interaction layer
│   │   └── services/         # Core services (STT, etc.)
│   └── public/               # Extension assets
├── pages/                    # Extension UI pages
│   ├── options/              # Extension options page
│   ├── side-panel/           # Side panel interface
│   └── content/              # Content scripts
├── packages/                 # Shared packages
│   ├── ui/                   # React components & styling
│   ├── shared/               # Shared utilities
│   ├── storage/              # Storage abstractions
│   ├── i18n/                 # Internationalization
│   ├── hmr/                  # Hot module reload
│   ├── dev-utils/            # Development utilities
│   ├── vite-config/          # Vite configuration
│   ├── tailwind-config/      # Tailwind configuration
│   ├── schema-utils/         # JSON schema utilities
│   └── zipper/               # Extension packaging
└── utils/                    # Build utilities


## 🚀 Quick Start

### Prerequisites

- *Node.js*: >= 22.12.0
- *pnpm*: >= 9.15.1

### Installation

1. *Clone the repository*
   bash
   git clone <repository-url>
   cd zenstr
   

2. *Install dependencies*
   bash
   pnpm install
   

3. *Set up environment variables*
   Create a .env file in the root directory with your AI provider API keys:
   env
   OPENAI_API_KEY=your_openai_key
   ANTHROPIC_API_KEY=your_anthropic_key
   GOOGLE_API_KEY=your_google_key
   # Add other provider keys as needed
   

### Development

1. *Start development server*
   bash
   pnpm dev
   

2. *Load extension in Chrome*
   - Open Chrome and navigate to chrome://extensions/
   - Enable "Developer mode"
   - Click "Load unpacked" and select the chrome-extension/dist directory

3. *For Firefox development*
   bash
   pnpm dev:firefox
   

### Building

1. *Build for production*
   bash
   pnpm build
   

2. *Build for Firefox*
   bash
   pnpm build:firefox
   

3. *Create extension package*
   bash
   pnpm zip
   

## 🧪 Available Scripts

### Root Level
- pnpm dev - Start development server
- pnpm build - Build for production
- pnpm zip - Create extension package
- pnpm lint - Run ESLint
- pnpm type-check - Run TypeScript type checking
- pnpm clean - Clean all build artifacts

### Package Level
- pnpm --filter <package> dev - Start development for specific package
- pnpm --filter <package> build - Build specific package
- pnpm --filter <package> lint - Lint specific package

## 🔧 Configuration

### AI Providers

The extension supports multiple AI providers. Configure them in the options page or via environment variables:

- *OpenAI*: GPT-3.5, GPT-4, GPT-4 Turbo
- *Anthropic*: Claude 3.5 Sonnet, Claude 3 Opus
- *Google*: Gemini Pro, Gemini Flash
- *Groq*: Llama 3.1, Mixtral
- *Ollama*: Local models
- *Cerebras*: Cerebras models
- *XAI*: xAI models
- *DeepSeek*: DeepSeek models

### Extension Settings

Access the extension options page to configure:
- AI model selection
- API keys and endpoints
- Firewall settings
- General preferences
- Speech-to-text settings

## 📚 Package Documentation

### Core Packages

- *[UI Package](./packages/ui/README.md)* - React components and styling
- *[I18n Package](./packages/i18n/README.md)* - Internationalization utilities
- *[Shared Package](./packages/shared/README.md)* - Shared utilities and types
- *[Schema Utils](./packages/schema-utils/README.md)* - JSON schema utilities

### Development Packages

- *[HMR Package](./packages/hmr/)* - Hot module reload implementation
- *[Dev Utils](./packages/dev-utils/)* - Development utilities
- *[Vite Config](./packages/vite-config/)* - Shared Vite configuration
- *[Tailwind Config](./packages/tailwind-config/)* - Tailwind CSS configuration

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: git checkout -b feature/amazing-feature
3. Make your changes
4. Run tests and linting: pnpm lint && pnpm type-check
5. Commit your changes: git commit -m 'Add amazing feature'
6. Push to the branch: git push origin feature/amazing-feature
7. Open a Pull Request

### Code Style

- Follow the existing ESLint configuration
- Use Prettier for code formatting
- Write TypeScript with strict type checking
- Follow React best practices
- Add tests for new features

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](./LICENSE) file for details.

## 🆘 Support

- *Issues*: [GitHub Issues](https://github.com/your-org/zenstr/issues)
- *Discussions*: [GitHub Discussions](https://github.com/your-org/zenstr/discussions)
- *Documentation*: Check the package-specific README files

## 🔗 Related Links

- [Chrome Extension Manifest V3](https://developer.chrome.com/docs/extensions/mv3/)
- [LangChain Documentation](https://js.langchain.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Turborepo](https://turbo.build/repo)

---

Built with ❤ by the Zentra team

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/munazir9741-gmailcoms-projects/v0-image-analysis)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/sPFHLLpadFe)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[[(https://zentra-rust.vercel.app/#demo)](https://zentra-rust.vercel.app/#demo)]**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository



[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Node.js](https://img.shields.io/badge/Node.js-22.12.0+-green.svg)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-9.15.1+-orange.svg)](https://pnpm.io/)
