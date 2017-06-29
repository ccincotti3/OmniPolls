Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :groups, except: [:show, :edit, :new]
    resources :questions, only: [:create, :destroy, :update, :show]
    resources :possible_responses, only: [:create, :index]
    resources :responses, only: [:create, :update, :destroy]
    resources :active_polls, only: [:create, :show, :update]
  end

  resource :messages do
    collection do
      post 'reply'
    end
  end
end
