# encoding: UTF-8
namespace :db do
  desc "Fill database with sample data"
  task :populate => :environment do
    # Rake::Task['db:reset'].invoke  

    apps = [
      {:name => "Facebook", :file_name => "facebook"},
      {:name => "Twitter", :file_name => "twitter" },
      {:name => "GitHub", :file_name => "github" },
      {:name => "Google Plus", :file_name => "g_plus" },
      {:name => "DropBox", :file_name => "drop_box" },
      {:name => "Skype", :file_name => "skype" },
      {:name => "Evernote", :file_name => "evernote" },
      {:name => "Kindle", :file_name => "kindle" },
      {:name => "Google Reader", :file_name => "g_reader" },
      {:name => "Gmail", :file_name => "gmail" },
      {:name => "YouTube", :file_name => "youtube" },
      {:name => "Instagram", :file_name => "instagram"},
      {:name => "Chrome", :file_name => "chrome"},
      {:name => "Firefox", :file_name => "firefox"},
      {:name => "WhatsApp Messenger", :file_name => "whatsapp"},
      {:name => "Angry Birds", :file_name => "angry_birds"},
      {:name => "Apalabrados", :file_name => "apalabrados"},
      {:name => "Spotify", :file_name => "spotify"},
      {:name => "La Caixa", :file_name => "lacaixa"},
      {:name => "Opera Mobile", :file_name => "opera"},
    ]

    num_apps = apps.length        
    begin
      apps.each do |app|        
        App.create!(
          :name => app[:name],
          :file_name => app[:file_name]
        )
      end
    rescue StandardError => error      
      puts "Error en APPS: #{error}"
    end      

    puts "--- #{num_apps} apps created ---"  
        
  end # task :populate                 
end # namespace :db 
