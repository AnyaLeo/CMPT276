Rails.application.routes.draw do
  get 'pages/home'
  get 'pages/help'
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'pages/index';
end
