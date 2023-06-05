Rails.application.routes.draw do
  resources :users
  resources :tags
  resources :posts
  resources :user_tags
  resources :post_tags

  get 'auth/signup'
  get 'auth/login'
  get 'auth/logout'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  get '/me', to: 'user#show'
  delete '/logout', to: 'sessions#destroy'
  get '/current_user_info', to: 'users#current_user_info'
  get '/users/:id/posts', to: 'posts#index'
  get '/users/:id/user_posts', to: 'user_posts#index'
  post '/users/:id/posts', to: 'posts#create'
  get '/users/:user_id/user_posts/:id', to: 'user_posts#show'
  delete '/user_posts/:id', to: 'user_posts#destroy'
  get '/posts/tag/:id', to: 'posts#by_tag'
  post '/posts/:id/post_tags', to: 'post_tags#create'
  get '/posts/tag/:tag', to: 'posts#by_tag'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
