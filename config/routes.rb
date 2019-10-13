Rails.application.routes.draw do
  get 'appointments', to: "appointments#index"
  root 'appointments#index'
  post 'appointments', to: "appointments#create"
end
