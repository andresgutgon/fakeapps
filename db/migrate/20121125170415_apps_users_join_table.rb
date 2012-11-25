class AppsUsersJoinTable < ActiveRecord::Migration  
  def up
    create_table :apps_users, :id => false do |t|
      t.references :user
      t.references :app
    end
  end

  def down
    drop_table :apps_users
  end  
end
