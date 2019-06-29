Rails.application.routes.draw do
  get 'pages/welcome'
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#welcome'
  get 'users/new'
  get 'pages/index';
  get  '/signup',  to: 'users#new'
end
