class App < ActiveRecord::Base
  attr_accessible :name, :file_name

  has_and_belongs_to_many :users

  def to_json(options = {})
    super(options.merge(:only => [ :id, :name, :file_name ]))
  end  

end
