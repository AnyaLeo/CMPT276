Rails.application.routes.draw do
  root 'pages#home'
  get  'pages/home'
  get  'pages/help'
  get  'pages/about'
  get  'pages/index'
  resources :users
end
