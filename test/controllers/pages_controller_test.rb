require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  
  def setup
    @base_title = "MULTIBRAIN"
  end

  test "should get home" do
    get root_path
    assert_response :success
    assert_select "title", "Home | MULTIBRAIN"
  end

  test "should get help" do
    get help_path
    assert_response :success
    assert_select "title", "Help | MULTIBRAIN"
  end

  test "should get about" do
    get about_path
    assert_response :success
    assert_select "title", "About | MULTIBRAIN"
  end

  test "should get contact" do
    get contact_path
    assert_response :success
    assert_select "title", "Contact | MULTIBRAIN"
  end
  
  test "should get boards" do
    get boards_path
    assert_response :success
    assert_select "title", "Boards | MULTIBRAIN"
  end
  
  test "should get groups" do
    get groups_path
    assert_response :success
    assert_select "title", "Groups | MULTIBRAIN"
  end
  
    test "should get profile" do
    get profile_path
    assert_response :success
    assert_select "title", "Profile | MULTIBRAIN"
  end
end