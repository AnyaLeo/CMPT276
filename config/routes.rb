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
  delete '/logout',  to: 'sessions#destroy'
  resources :users
end
