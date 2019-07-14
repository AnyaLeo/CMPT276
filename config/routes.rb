Rails.application.routes.draw do
  get 'sessions/new'
  root 'pages#home'
  get  'pages/index'
  get  '/help',    to: 'pages#help'
  get  '/about',   to: 'pages#about'
  get  '/contact', to: 'pages#contact'
  get  '/signup',  to: 'users#new'
  get  '/groups',  to: 'pages#groups'
  get  '/boards',  to: 'pages#boards'
  get  '/profile',  to: 'pages#profile'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  get '/logout',  to: 'sessions#destroy'
  resources :users
  #add paths to update, delete, create, show, etc. for boards
  resources :boards
  resources :pages

  get '/', to: 'boards#index'
  post '/updateline', to: 'boards#show'

  mount ActionCable.server => '/cable'
end
