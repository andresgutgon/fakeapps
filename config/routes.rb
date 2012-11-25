Fakeapps::Application.routes.draw do


  root :to => 'app#index'

  match "/all-apps/" => "app#index", :as => "all_apps"
  match "/apps-installed-by/:slug" => "app#apps_installed_by", :as => "your_apps"

  match "*nothing" => "dashboard#index"
  

end
