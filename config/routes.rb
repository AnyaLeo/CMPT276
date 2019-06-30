Rails.application.routes.draw do
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'pages/index';
  
  #add paths to update, delete, create, show, etc. for boards
  resources :boards
  #get 'boards', to:"boards#index"
end
