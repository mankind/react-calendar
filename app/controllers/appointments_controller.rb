class AppointmentsController < ApplicationController
  def index
   @appointment = Appointment.new
   @appointments = Appointment.order('appt_time ASC')
  end

  def create
    @appointment = Appointment.new(appointment_params)
    #passing appointments to create.js.erb
    #@appointments = Appointment.order('appt_time ASC')

   #no need t redirect since we are refreshing index page from create.js.erb
    #redirect_to :root
    logger.info "appoint, #{@appointment.title}"
        logger.info "appoint time, #{@appointment.appt_time}"
    logger.info "appoint params, #{appointment_params}"
    logger.info "title: params['title']"
    logger.info "appt_time: params[:appointment][:appt_time]"
    respond_to do |format|
      if @appointment.save
        logger.info("appointment: #{@appointment}")
        #throws error cannot redirect to nil
        #format.html {redirect_to @appointments, notice: 'appointment created'}
        format.json {render json: @appointment, status: :ok}
      else
        format.html {render :new}
        format.json {render json:  @appointment.errors.messages, status: :unprocessable_entity}
      end
    end
  end

  private
 
  def appointment_params
    params.require(:appointment).permit(:title, :appt_time)
  end

end
