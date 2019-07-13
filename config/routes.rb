Rails.application.routes.draw do
  get  'sessions/new'
  root 'pages#home'
  get  '/help',    to: 'pages#help'
  get  '/about',   to: 'pages#about'
  get  '/contact', to: 'pages#contact'
  get  '/signup',  to: 'users#new'
  get  '/groups',  to: 'pages#groups'
  get  '/boards',  to: 'pages#boards'
  get  '/profile', to: 'pages#profile'
  get  '/login',   to: 'sessions#new'
  post '/login',   to: 'sessions#create'
  get  '/logout',  to: 'sessions#destroy'
  resources :users
  #add paths to update, delete, create, show, etc. for boards
  get  '/boards/:id',            to: 'boards#show'
  put  '/boards/:id/save_board', to: 'boards#save_board'
  delete  '/boards/:id',          to: 'boards#destroy'
  resources :boards
  resources :pages
end
