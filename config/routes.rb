Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :groups, except: [:show, :edit, :new]
    resources :questions, only: [:create, :destroy, :update, :show]
    resources :possible_responses, only: [:create]
  end
end
