class AppController < ApplicationController
	respond_to :html, :json

	def index
		respond_with(@apps = App.all)
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
end
