class User < ActiveRecord::Base
  attr_accessible :last_name, :name, :slug

  has_and_belongs_to_many :apps

  def full_name  	
  	"#{self.name} #{self.last_name}"
  end

  def apps_counter
  	self.apps.size  	
  end

  def as_json(options = {})
    super(options.merge(
    	:only => [ :id, :name, :last_name, :slug], 
    	:methods => [:full_name, :apps_counter], 
    	# :include => { :apps => { :only => [:name]} }
		)
    )
  end    
end
