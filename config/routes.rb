Rails.application.routes.draw do
  get 'static_pages/home'
  get 'static_pages/help'
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'pages/index';
end
