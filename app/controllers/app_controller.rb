class AppController < ApplicationController
	respond_to :html, :json

	def index
		if current_user
			id_installed_apps = current_user.apps.map(&:id) 						
			@apps = id_installed_apps.length > 0 ? App.where('id NOT in (?)', id_installed_apps) : App.all
		else
			@apps = App.all
		end
		respond_with(@apps)			
	end

	def install		
		install_uninstall
	end

	def uninstall		
		install_uninstall(false)
	end

	def apps_installed_by
		user = User.find_by_slug(params[:slug])
		if user and user == current_user
			@apps = user.apps
		    respond_to do |format|
		      format.any(:json, :html) { render :json => @apps }
		    end			
		else
			redirect_to :root		
		end
	end

	private

	def install_uninstall(install=true)
		@status = false
		if params[:app][:user_ids].length > 0
			user = User.find_by_id(params[:app][:user_ids][0])
			if user == current_user
				app = App.find_by_id(params[:app][:id])				
				begin
					if install
				 		app.users << user				 		
				 	else
				 		app.users.delete user 				 		
				 	end				 	
				rescue Exception => e
					nil
				end 	

				@data = {:status => @status, :install => install}			
			    respond_to do |format|			    
		    		format.json { render :json => @data }
		    	end			
		    else			
				redirect_to :root		
		    end			
		else
			redirect_to :root		
		end		
	end
end
